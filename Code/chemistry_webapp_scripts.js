window.addEventListener('load', function() {
        toggleRows(0);
      });
      
      function toggleRows(visibleRows) {
        const rows = document.querySelectorAll("#big_container .row");
      
        rows.forEach((row) => {
          row.style.display = "none";
        });
      
        for (let i = 0; i < visibleRows; i++) {
          rows[i].style.display = "block";
        }
}



function get_available_solutions() {
        solution_converted = [];
  for (let i = 1; i <= 10; i++) {
    solution = document.getElementById(`solution${i}`).value;
    solution_unit = document.getElementById(`solution${i}_unit`).value;

    if (solution_unit == 1) {
      solution_converted[i] = solution * 1000000;
    } else if (solution_unit == 2) {
      solution_converted[i] = solution * 1000;
    } else {
      solution_converted[i] = solution;
    }
  }
}

function get_desired_concentrations() {
        concentration_converted = [];
  for (let i = 1; i <= 10; i++) {
    const concentration = document.getElementById(`concentration${i}`).value;
    const concentration_unit = document.getElementById(`concentration${i}_unit`).value;

    if (concentration_unit == 1) {
      concentration_converted[i] = concentration * 1000000;
    } else if (concentration_unit == 2) {
      concentration_converted[i] = concentration * 1000;
    } else {
      concentration_converted[i] = concentration;
    }
  }
}

function get_total_volume() {
        total_volume = document.getElementById("total_volume").value;
        total_volume_unit = document.getElementById("total_volume_unit").value;
        if (total_volume_unit==1) {
                total_volume_converted = total_volume*1000;
        } else {
                total_volume_converted = total_volume;
        }
}

function calculate_volumes() {
        volumes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      
        for (let i = 1; i <= 10; i++) {
          if (solution_converted[i] !== 0 && concentration_converted[i] !== 0) {
            volumes[i - 1] = total_volume_converted / (solution_converted[i] / concentration_converted[i]);
          }
        }
        fill_up_volume = total_volume_converted - volumes.reduce((acc, cur) => acc + cur, 0);
}

function set_volumes() {
        for (let i = 1; i <= 10; i++) {
          const volume_field = document.getElementById("required_volume" + i);
          volume_field.value = volumes[i - 1];
        }
        
        fill_up_volume_field = document.getElementById("fill_up_volume");
        fill_up_volume_field.value = fill_up_volume;
}
