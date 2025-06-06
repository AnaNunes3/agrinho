Skip to Play Sketch
Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, nunes.silva13!



Auto-atualizar

Unique moose
por nunes.silva13

p5.js 1.11.7


sketch.js
Salvo: cerca de 24 horas atrás
1
let farmColor, cityColor;
2
let truckX = 0;
3
let truckSpeed = 1;
4
​
5
function setup() {
6
  createCanvas(800, 400);
7
  farmColor = color(100, 200, 100); // Verde campo
8
  cityColor = color(200, 100, 100); // Vermelho cidade
9
}
10
​
11
function draw() {
12
  // Fundo com gradiente campo-cidade
13
  let bgColor = lerpColor(farmColor, cityColor, truckX / width);
14
  background(bgColor);
15
​
16
  // Desenha o campo (movendo com o caminhão)
17
  drawFarm();
18
​
19
  // Desenha a cidade (fixa, não se move)
20
  drawCity();
21
​
22
  // Movimenta o caminhão com o mouse
23
  if (mouseIsPressed) {
24
    truckSpeed = 5;  // Acelera ao clicar
25
  } else {
26
    truckSpeed = 1;  // Velocidade normal
27
  }
Não há mensagens de Lint
Linha atuallinha 1

Terminal
Limpar

​
Prévia
