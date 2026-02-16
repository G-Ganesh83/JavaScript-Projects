function calculateAge(){
            let date = document.getElementById("dob").value;
            if(date === ""){
                document.getElementById("result").innerHTML = "Please enter your age";
            }

            let birthDate = new Date(date);
            let today = new Date();

            // console.log(birthDate + " " + today);

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if(months < 0){
                years--;
                months += 12;
            }
            if(days < 0){
                months--;
                day = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                days += day;
            }
            document.getElementById("result").innerHTML = `You are <b>${years}</b> Years, <b>${months}</b> Months, <b>${days}</b> Days old`;
        }