function disableAudiosInSkype(seconds, whiteList) {
    function disableAudios() {
        var Falatorio = Array.from(
            document.querySelectorAll('button[title="Ativar Mudo"]')
        );
        Falatorio.map((people) => {
            console.log('.');
            //check if is a teacher
            var isTeacher = whiteList.some(item => people.ariaLabel.includes(item))

            if (isTeacher) return;
            people.click();
            console.log("mutado:\n", people.ariaLabel);
            return;
        });
    }

    setInterval(() => disableAudios(), seconds * 1000);
}

const WhiteList = ["FÍSICA SEJA-EaD", "Prof"];
disableAudiosInSkype(3,WhiteList);