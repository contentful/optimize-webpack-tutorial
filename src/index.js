//import moment from 'moment'
//import dayjs from 'dayjs'
//import { clone } from 'lodash'

const example = () =>{
  const element = document.createElement('p');

  element.innerHTML = 'Hello World';// + moment();
  
  return element;
  //return clone(element);
}

document.body.appendChild(example());