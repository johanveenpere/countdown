function calculate_stuff(){
			
			let start_time = new Date("2023-01-30T00:00:00");
			let end_time = new Date("2023-12-22T18:00:00");
			let current_time = new Date().getTime();
			
			var time_left = end_time - current_time;
			let time_duration = end_time - start_time;
			let time_served = time_duration - time_left;
			
			let weeks_left = time_left / (1000 * 60 * 60 * 24 * 7);
			let full_weeks_left = Math.floor( time_left / (1000 * 60 * 60 * 24 * 7));
			let partial_weeks_left = weeks_left-full_weeks_left;
			let partial_work_weeks_left = partial_weeks_left * 7 / 5;
			partial_work_weeks_left = Math.min(1.0, partial_work_weeks_left);
			let work_weeks_left = full_weeks_left + partial_work_weeks_left;
			console.log("töönädalaid: "+work_weeks_left)

			var percentage_element = document.getElementById("percentage");
			percentage_element.innerHTML = String(Math.round(time_served / time_duration * 1000) / 10) + "%";
			var time_left_element = document.getElementById("time_left");
			time_left_element.innerHTML = Math.trunc( time_left / (1000 * 60*60*24));
			var weeks_left_element = document.getElementById("weeks_left");
			weeks_left_element.innerHTML = Math.round(work_weeks_left * 100 ) / 100;
			
			
			let past_box_color = "grey"
			let future_box_color = "rgb(93, 130, 94)"

			//future weeks boxes
			for (let i = 1; i < full_weeks_left+1; i++) {
			  let element = document.getElementById(i.toString());
			  element.style.backgroundColor = future_box_color;
			} 
			
			//current week box
			let last_square_element = document.getElementById((full_weeks_left+1).toString());
			let percentage_of_current_week = Math.round(partial_work_weeks_left*100);
			last_square_element.style.backgroundImage = 'linear-gradient(to left, transparent '+ (100-percentage_of_current_week) +'%,  '+future_box_color+' 0.01%, ' +future_box_color+' '+ percentage_of_current_week +'%)';
	
			//past weeks boxes
			for (let i = full_weeks_left+1; i <= 15; i++) {
				let element = document.getElementById(i.toString());
				element.style.backgroundColor = past_box_color;
			  } 
			
}
