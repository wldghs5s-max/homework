function setListenerToCard(){

    const cardAreaArr = document.querySelectorAll(".card-area");
    
    for(const cardArea of cardAreaArr){
        cardArea.addEventListener("click" , function(evt){
            const temp = evt.currentTarget;
            temp.classList.toggle("flip");
            
            setTimeout(() => {
     
            temp.classList.toggle("flip");
            } , 5000 );
        });
    }
}


const main = document.querySelector("main");

function generateCardList(){
    const cardCnt = document.querySelector("#cardCnt").value;
    if(cardCnt > 30){
        alert("최대 30개 까지 생성가능")
        return;
    }
    main.innerHTML = "";

    const cardContentArr = [];
    for(let i = 1; i<= cardCnt; i++){
        cardContentArr.push(i);
    }
    const arr = cardContentArr.concat(cardContentArr);

    const result = shuffleArr(arr);
    for(temp of arr){
        main.innerHTML += `
            <div class="card-area">
                    <div class="card">
                    <div class="card-back"><img src="../static/${temp}.jpg" alt="" width="80px" height="108px"></div>
                    <div class="card-front"><img src="../static/front.jpg" alt="" width="80px" height="108px"></div>
                </div>
            </div>
`;
    }
}

function shuffleArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr;
}

function handleClick(){
    generateCardList();
    setListenerToCard();
}




