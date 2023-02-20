import {v4 as uuid} from 'uuid';
import { Contact } from './model';
export let initialContacts:Contact[]=[
    {id:uuid(),
    name:"Chandermani Arora",
    email:"chandermani@technovert.com",
    mobile:"+91 9292929292",
    landline:"040301231211",
    website:"www.technovert.com",
    address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
    {id:uuid(),
    name:"Sashi Pagadala",
    email:"sashi@technovert.com",
    mobile:"+91 9985528844",
    landline:"040301231211",
    website:"www.technovert.com",
    address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
    {id:uuid(),
    name:"Praveen Battula",
    email:"praveen@technovert.com",
    mobile:"+91 9985016232",
    landline:"040301231211",
    website:"www.technovert.com",
    address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"},
    {id:uuid(),
    name:"Vijay Yalamanchili",
    email:"vijay@technovert.com",
    mobile:"+91 9885071216",
    landline:"040301231211",
    website:"www.technovert.com",
    address:"123 now here\nSome street\nMadhapur, Hyderabad 500033"}
    ]
    export let emptyContact:Contact={
    id:"",
    name:"",
    email:"",
    mobile:"",
    landline:"",
    website:"",
    address:"",
    }
    