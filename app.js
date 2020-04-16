const moviesMenu = document.getElementById('movies');
const seat = document.getElementsByClassName('seat')
const selectedSeats = document.getElementsByClassName('selected');
const counter = document.getElementById('counter');
const totalPrice = document.getElementById('total-price');

// *******  Functions  *******

for (let i = 0; i < seat.length; i++) {
	const seatClass = seat[i].classList;
	// let totalSeats = 0;


	function removeSeat() {
		seatClass.remove('selected');
		seatClass.add('available');
		counter.textContent--;
		// totalPrice.textContent ;
		totalPrice.textContent = (totalPrice.textContent - moviesMenu.value).toFixed(2);
	}

	function addSeat() {
		seatClass.add('selected');
		seatClass.remove('available');
		counter.textContent++;
		totalPrice.textContent = (moviesMenu.value * counter.textContent).toFixed(2);
	}

	seat[i].addEventListener('click', (e) => {
		// e.preventDefault();
		if (moviesMenu.value == 0) {
			alert('Choose a movie first!');
		} else if (seatClass[1] === 'selected') {
			removeSeat();

		} else if (seatClass[1] !== 'selected' && seatClass[1] !== 'occupied') {
			addSeat();
		}


	});
}