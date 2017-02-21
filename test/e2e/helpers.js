/* global window, $ */
import url from 'url';
import nightmareFn from 'nightmare';

const BASE_URL = 'http://localhost:9999';

export default function getNightmareInstance() {
  return nightmareFn({
    show: process.env.EXECUTE_E2E_HEADLESS !== 'true',
    webPreferences: {
      partition: 'nopersist',
    },
  });
}

export function goto(path, waitFor = '[data-reactroot]') {
  return nightmare => nightmare
    .goto(url.resolve(BASE_URL, path))
    .inject('js', 'node_modules/jquery/dist/jquery.js')
    .wait(waitFor);
}

export function clickIncrement() {
  return nightmare => nightmare
    .wait(() => !!$('button:contains("Increment")'))
    .evaluate(() => {
      $('button:contains("Increment")').eq(0).click();
      return null;
    });
}

export function clickDecrement() {
  return nightmare => nightmare
    .wait(() => !!$('button:contains("Decrement")'))
    .evaluate(() => {
      $('button:contains("Decrement")').click();
      return null;
    });
}

export function clickIncrementAsync() {
  return nightmare => nightmare
    .wait(() => !!$('button:contains("Increment async")'))
    .evaluate(() => {
      $('button:contains("Increment async")').click();
      return null;
    });
}

export function clickPlusN(n) {
  return nightmare => nightmare
    .wait(num => !!$(`button:contains(+${num})`), n)
    .evaluate((num) => {
      $(`button:contains(+${num})`).click();
      return null;
    }, n);
}

export function getCount() {
  return nightmare => nightmare
    .evaluate(() =>
      Number(window.document.querySelector('h1').innerText.split(': ')[1]));
}
