const image = document.getElementById("movableImage");
        let x = 0;
        let y = 0;

        function moveImage(event) {
            switch (event.key) {
                case "ArrowUp":
                    y -= 10;
                    break;
                case "ArrowDown":
                    y += 10;
                    break;
                case "ArrowLeft":
                    x -= 10;
                    break;
                case "ArrowRight":
                    x += 10;
                    break;
            }

            image.style.left = x + "px";
            image.style.top = y + "px";
        }

        document.addEventListener("keydown", moveImage);