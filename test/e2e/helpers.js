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
  return (nightmare) => nightmare
    .goto(url.resolve(BASE_URL, path))
    .wait(waitFor);
}

export function clickIncrement() {
  return (nightmare) => nightmare
    .click('.increment');
}

export function clickDecrement() {
  return (nightmare) => nightmare
    .click('.decrement');
}

export function clickIncrementAsync() {
  return (nightmare) => nightmare
    .click('.increment-async');
}

export function getCount() {
  return (nightmare) => nightmare
    .evaluate(() =>
      Number(window.document.querySelector("h1").innerText.split(': ')[1]));
}
