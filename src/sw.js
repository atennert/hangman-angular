!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}({14:function(e,n,t){"use strict";const r=["hangman-atennert-0.2.9"];self.addEventListener("install",e=>{e.waitUntil(caches.open("hangman-atennert-0.2.9").then(e=>e.addAll(["index.html","index.js","style.css","icon-192.png","icon-512.png","manifest.json"])))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e.startsWith("hangman-atennert")&&!r.includes(e)).map(e=>caches.delete(e)))))}),self.addEventListener("fetch",e=>{const n=new URL(e.request.url);n.origin!==location.origin||"/"!==n.pathname?e.respondWith(caches.match(e.request).then(n=>n||fetch(e.request))):e.respondWith(caches.match("index.html").then((response) => response || fetch("index.html")))})}});
