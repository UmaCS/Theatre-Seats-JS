const moviesMenu = document.getElementById('movies');
const seat = document.getElementsByClassName('seat')
const selectedSeats = document.getElementsByClassName('selected');
const finalSelected = document.getElementById('selected-seats');



// *******  Functions  *******

const getSelectedMovie = () => console.log(moviesMenu.value);

for (let i = 0; i < seat.length; i++) {
	const seatClass = seat[i].classList;
	let totalSeats = 0;

	function removeSeat() {
		seatClass.remove('selected');
		seatClass.add('available');
		totalSeats -= 1;
	}

	function addSeat() {
		seatClass.add('selected');
		seatClass.remove('available');
		totalSeats += 1;
	}

	seat[i].addEventListener('click', (e) => {
		// e.preventDefault();
		if (seatClass[1] === 'selected') {
			removeSeat();

		} else if (seatClass[1] !== 'selected') {
			addSeat();
		}

		// selected.length
		console.log(totalSeats)

	});
}