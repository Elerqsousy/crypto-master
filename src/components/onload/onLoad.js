import moment from 'moment';
import api from '../../redux/api';
import local from '../../redux/local';
import store from '../../redux/store';

const updateOnLoad100 = (list, localName, apicall, localCall) => {
  const currentDate = moment();
  const saved = JSON.parse(localStorage.getItem('date'));
  const localDateToDate = localStorage.getItem('date') ? moment(saved).add(1, 'days') : 0;

  if (!list.length) {
    if (!localStorage.getItem(localName) || currentDate > localDateToDate) {
      if (apicall.length) {
        store.dispatch(api[apicall]());
      }
      local.setToLocal(currentDate, 'date');
    } else {
      store.dispatch(local[localCall]());
    }
  }
};

export default updateOnLoad100;
