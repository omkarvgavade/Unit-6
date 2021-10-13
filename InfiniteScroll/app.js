const container = document.querySelector('.container');
const URL = 'https://api.unsplash.com/photos/random?client_id=1_mZ7KFa6sDdUAKLf3npFtX5ASyCft4qo3E7dkPVKyw'
async function handleChange() {
    try {
        let data = await fetch("https://api.unsplash.com/photos/random?client_id=1_mZ7KFa6sDdUAKLf3npFtX5ASyCft4qo3E7dkPVKyw")
        let data2 = await data.json();
        if (data2.Response == "False") {
            console.log("err")
        }
        else {

            showData(data2)

        }

    }
    catch (e) {
        console.log(e, "hi");
    }

}
handleChange()
function getRandomNum() {
    return Math.floor(Math.random() * 100)
}

let counter = 1;
function loadImages(numImages = 7) {
    let i = 0;
    while (i < numImages) {
        const div = document.createElement('div');
        // const data = handleChange()
        // console.log(data)
        div.textContent = `Masai Student ${counter}`
        // image.src = `https://yt3.ggpht.com/a/AATXAJxhWR8spfPAOhtOg6BwP7XkZJkicX3LPed9yQ=s900-c-k-c0xffffffff-no-rj-mo`
        container.appendChild(div);
        counter++;
        i++;
    }
}

loadImages()

window.addEventListener('scroll', () => {
    console.log(window.innerHeight)
    console.log(window.scrollY)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setTimeout(() => {
            loadImages()

        }, 1000)
    }
})
