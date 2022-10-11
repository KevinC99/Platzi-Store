import { Component, OnInit } from '@angular/core';
import { initialize,Event } from '@harnessio/ff-javascript-client-sdk';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/core/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$:Observable<number>;
  mensaje='a'

  constructor(
    private cartService:CartService,
  ) {
    this.total$=this.cartService.cart$
    .pipe(
      map(products=>products.length)
    );
   }

  ngOnInit() {

    var cf = initialize(
      '8637c140-68bf-49df-8e47-0672ec4903ee',
      {
        identifier: 'bandera-de-prueba',
        attributes: {
          lastUpdated: Date(),
          host: location.href
        }
      }
    )
    cf.on(Event.READY, flags => {
      console.log(JSON.stringify(flags, null, 2))
    })

    cf.on(Event.CHANGED, flagInfo => {
      if (flagInfo.value) {
        console.log('Flag is deleted')
        console.log(JSON.stringify(flagInfo, null, 2))
        this.mensaje =''

      } else {
        console.log(JSON.stringify(flagInfo, null, 2))
        console.log('Flag is changed')
        this.mensaje ='mostrar'
      }
    })
  }
}
