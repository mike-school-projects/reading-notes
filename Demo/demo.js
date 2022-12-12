'use strict'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#F0DB4F';
ctx.strokeStyle = 'red';
ctx.fillRect(50, 50, 150, 100);
ctx.strokeRect(50, 50, 150, 100);