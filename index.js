function calculate_stuff(){
			let start_time = new Date("2023-01-30T00:00:00");
			let end_time = new Date("2023-12-22T00:00:00");
			let d = new Date();
			let current_time = d.getTime();
			var time_left = end_time - current_time;
			let time_duration = end_time - start_time;
			let time_served = time_duration - time_left;
			var percentage_element = document.getElementById("percentage");
			percentage_element.innerHTML = String(Math.round(time_served / time_duration * 1000) / 10) + "%";
			var time_left_element = document.getElementById("time_left");
			var time_left_element = document.getElementById("time_left");
			time_left_element.innerHTML = Math.round( time_left / (1000 * 60*60*24));
}
