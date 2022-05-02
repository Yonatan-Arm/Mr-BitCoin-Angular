import { Subscription } from 'rxjs';
import { BitcoinService } from './../../services/bitcoin-service.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  options: any= null;
  period:string= 'year'
  btcData:any
  title:string
  chartOption: any 
  newMarketData: Array<Array<any>>
  constructor(private bitcoinService: BitcoinService  ) {}

  async ngOnInit() {
   await this.setMarketPrice()

  }
  async setMarketPrice() { 
    this.bitcoinService.getMarketPrice().subscribe(
      (result => this.filterMarketData(result))
    )

}
filterMarketData(result): void {
  this.newMarketData = this._filterData(result);
  this.title = result.name + ' - ' + result.description; 
  this.btcData= this.newMarketData.map(item=> item.splice(1).join(''))
  this.options= this.newMarketData.map(item=> item.splice(0).join(''))
  this.setOptions()
}
_filterData(result) {
  return result.values.map(value => {
    const options:any = { year: '2-digit', month: '2-digit', day: '2-digit' };
    let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
    let bitCoinRate = value.y;
    return [date, bitCoinRate];
  })
}

setOptions(){
 this.chartOption = {
    xAxis: {
      textColor:'#ffff',
      type: 'category',
      data: this.options,
      
    },
    yAxis: {
      color:'#ffff',
      type: 'value',
    },
    series: [
      {
        data:this.btcData,
        type: 'line',
      },
    ],
  };

}





}

