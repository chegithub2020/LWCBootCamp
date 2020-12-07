import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    isJerry = false;
    isTom = false;
    showJerry(){
        
        this.isJerry = true;
        this.isTom =false;
    }
    isJerry = true;
    isTom = false;
    showTom(){
        this.isTom = true;
        this.isJerry = false;
    }
}
