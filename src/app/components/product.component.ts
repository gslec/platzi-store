import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements /*OnChanges,*/ OnInit, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1. Constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes)
    // }

    ngOnInit(): void {
        console.log('3. ngOnInit');

    }

    ngDoCheck() {
        console.log('4. doCheck');
    }

    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

    ngOnDestroy() {
        console.log('onDestroy');
    }
}
