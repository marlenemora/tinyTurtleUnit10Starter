TinyTurtle.apply(window);

function triangle(){
forward(50);
right(100);
forward(50);
right(130);
forward(65);
stamp();
}

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);

}

function house(){
forward(30);          
right(50);            
forward(20);       
right(80);          
forward(20);       
right(140);          
forward(30);       
right(180);
forward(30);        
right(90);
forward(30);
right(90);
forward(30);

}

function pentagon(){
forward(30);         
right(50);            
forward(20);      
right(80);         
forward(20)
right(50);
forward(30);
right(90);
forward(30);

}

function hexagon(){
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
right(60);
forward(30);
}
hexagon();
house();
pentagon();
triangle();