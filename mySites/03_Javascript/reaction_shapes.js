			var box = document.getElementById('box')
			var clickedTime; var createdTime;
			var totalTime = 0; var numClicks = 0;

			function randomlyShowBox() {
				function showBox () {
					// set location
					var posLeft = 1220 * Math.random()
					var posTop = 370 * Math.random()
					box.style.left = posLeft + "px"
					box.style.top = posTop + "px"

					// set circle or square
					var randomNum = Math.random()
					if (randomNum < 0.5) {
						box.style.borderRadius = "50%";
					}
					else {
						box.style.borderRadius = "0";	
					}

					// set color
					function get_random_color() {
						var letters = 'ABCDE'.split('');
						var color = '#';
						for (var i=0; i<3; i++ ) {
							color += letters[Math.floor(Math.random() * letters.length)];
						}
						return color;
					}
					box.style.backgroundColor = get_random_color()

					box.style.display = "block"					
				}

				var mSec = Math.floor( Math.random() * 3000 )
				createdTime = Date.now() + mSec
				setTimeout( showBox, mSec )
			}

			document.getElementById('begin').onclick = function() {
				randomlyShowBox()
			}

			box.onclick = function() {
				this.style.display = "none"

				clickedTime = Date.now()
				var elapsedTime = clickedTime - createdTime
				totalTime += elapsedTime
				numClicks += 1
				var averageTime = totalTime / numClicks

				document.getElementById("lastClick").innerHTML = elapsedTime + " milliseconds"
				document.getElementById("averageClick").innerHTML = averageTime + " milliseconds"

				randomlyShowBox()
			}
