function calculate_stuff(){
			
			let start_time = new Date("2023-01-30T00:00:00");
			let end_time = new Date("2023-12-22T00:00:00");
			let final_week_time = new Date("2023-12-25T00:00:00");
			
			let d = new Date();
			
			let current_time = d.getTime();
			
			var time_left = end_time - current_time;
			let time_duration = end_time - start_time;
			let time_served = time_duration - time_left;
			let weeks_left = final_week_time - current_time;
			
			
			var percentage_element = document.getElementById("percentage");
			percentage_element.innerHTML = String(Math.round(time_served / time_duration * 1000) / 10) + "%";
			var time_left_element = document.getElementById("time_left");
			time_left_element.innerHTML = Math.trunc( time_left / (1000 * 60*60*24));
			var weeks_left_element = document.getElementById("weeks_left");
			let weeks_left_in_weeks = Math.round((weeks_left / (1000 * 60 * 60 * 24 * 7)) * 100 ) / 100;
			weeks_left_element.innerHTML = weeks_left_in_weeks;
			

			
			let past_box_color = "grey"
			let future_box_color = "#2b752e"

			//future weeks boxes
			for (let i = 1; i < Math.ceil(weeks_left_in_weeks); i++) {
			  let element = document.getElementById(i.toString());
			  element.style.backgroundColor = future_box_color;
			} 
			
			//current week box
			let last_square_element = document.getElementById(Math.ceil(weeks_left_in_weeks).toString());
			let percentage_of_current_week = (weeks_left_in_weeks - Math.floor(weeks_left_in_weeks))*100;
			last_square_element.style.background = 'linear-gradient(to left, transparent '+ (100-Math.round(percentage_of_current_week)) +'%, '+future_box_color+' '+ Math.round(percentage_of_current_week) +'%)';
			
			//past weeks boxes
			for (let i = Math.ceil(weeks_left_in_weeks); i <= 15; i++) {
				let element = document.getElementById(i.toString());
				element.style.backgroundColor = past_box_color;
			  } 
			
}
