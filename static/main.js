window.addEventListener('load', ()=>{

    const canvas = document.querySelector('#myCanvas');
    const ctx = canvas.getContext('2d');

    const canvasdata = document.querySelector('#canvasdata').value;
    if (canvasdata){
        const image = new Image();
        image.onload = ()=>{
            ctx.drawImage(image, 0, 0);
        };
        image.src = canvasdata;
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }


    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let painting = false;
    let start = 0;
    let end = Math.PI * 2;
    let radius = 10;

    ctx.lineWidth = 15;
    ctx.linecap = "round";

    const draw = (e)=>{
        if(painting){

            ctx.fillStyle = "white";
            ctx.strokeStyle = "white";

            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, radius, start, end);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    }
    
    const startPos = (e)=>{
        painting = true;
        draw(e);
    }

    const endPos = ()=>{
        painting = false;
        ctx.beginPath();
    }

    canvas.addEventListener("mousedown", startPos);
    canvas.addEventListener("mouseup", endPos);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", startPos, false);
    canvas.addEventListener("touchend", endPos, false);
    canvas.addEventListener("touchmove", draw, false);

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', ()=>{
        const canvas = document.querySelector("#myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.filter = 'invert(0)'
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
});

const canvastoimage = ()=>{
    const canvas = document.querySelector('#myCanvas');
    document.getElementById('canvasimg').value = canvas.toDataURL();
    console.log("Its working");
};