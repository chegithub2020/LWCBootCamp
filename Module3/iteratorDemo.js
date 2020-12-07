import { LightningElement } from 'lwc';
const columns = [
    { label: 'Index', fieldName: 'Index'},
    { label: 'Id', fieldName: 'id'},
    { label: 'Name', fieldName: 'Name'},
    { label: 'Email', fieldName: 'Email'}
];
export default class IteratorDemo extends LightningElement {
    
    contacts=[
        {Index : '0',id : 'C1',Name : 'Name One', Email : 'Name1@gmail.com'},
        {Index : '1',id : 'C2',Name : 'Name Two', Email : 'Name2@gmail.com'},
        {Index : '2',id : 'C3',Name : 'Name Three', Email : 'Name3@gmail.com'},
        {Index : '3',id : 'C4',Name : 'Name Four', Email : 'Name04@gmail.com'}
    ]
}
