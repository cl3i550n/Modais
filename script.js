const toggleModal01 = () => {
    document.body.classList.toggle("open01");
}

const toggleModal02 = () => {
    const bodyClassList = document.body.classList;

    if (bodyClassList.contains("open02")) {
        bodyClassList.remove("open02");
        bodyClassList.add("closed02");
    } else {
        bodyClassList.remove("closed02");
        bodyClassList.add("open02");
    }
};