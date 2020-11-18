var paused = false;

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    var count;
    const plus = document.querySelector("#plus");
    const minus = document.querySelector("#minus");
    const like = document.querySelector("#heart");
    const pause = document.querySelector("#pause");
    const form = document.getElementById("comment-form");
    const comments = document.querySelector("#list")

    count = setInterval(updateCounter, 1000);

    function updateCounter() {
        document.querySelector("#counter").innerHTML++;
    }

    plus.addEventListener("click", incrementTimer);    

    minus.addEventListener("click", decrementTimer);

    like.addEventListener("click", likeTime);

    pause.addEventListener("click", function () {   
        paused = !paused
        if (paused == true) {
            clearInterval(count);
            pause.innerText = "resume"
            plus.disabled = true;
            minus.disabled = true;
            like.disabled = true;
            //also working code below
            // plus.removeEventListener("click", incrementTimer);    
            // minus.removeEventListener("click", decrementTimer);
            // like.removeEventListener("click", likeTime);
        } else {
            document.querySelector("#counter").innerHTML = "0";
            count = setInterval(updateCounter, 1000)
            pause.innerText = "pause"
            plus.disabled = false;
            minus.disabled = false;
            like.disabled = false;
            // plus.addEventListener("click", incrementTimer);    
            // minus.addEventListener("click", decrementTimer);
            // like.addEventListener("click", likeTime);
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const input = document.querySelector('#comment-input')
        const p = document.createElement('p')
        p.textContent = input.value
        comments.appendChild(p)
        input.value = ""
    });

    function likeTime() {
        const num = parseInt(document.querySelector("#counter").innerHTML)
        var test = document.getElementById(num)
        var ul = document.querySelector(".likes")
        if (test == null) {
            const li = document.createElement("li")
            li.id = num
            li.value++
            li.innerText = `${num} has been liked ${li.value} time(s)`
            ul.appendChild(li)
        }
        else {
            var li = document.getElementById(num)
            li.value++
            li.innerText = `${num} has been liked ${li.value} time(s)`
        }
    }

});

function incrementTimer() {
    document.querySelector("#counter").innerHTML++;
}

function decrementTimer() {
    document.querySelector("#counter").innerHTML--;
}
