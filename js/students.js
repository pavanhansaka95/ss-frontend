getAllStudents()

function saveStudent(){
    let fname=$('#exampleFormControlInput2').val();
    let lname=$('#exampleFormControlInput5').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();
    let email=$('#exampleFormControlInput6').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/students/saveStudent",
        async: true,
        data:JSON.stringify({
            "stuID":"",
            "stuFirstName": fname,
            "stuLastName": lname,
            "stuAddress": address,
            "stuNumber": number,
            "stuEmail": email
        }),
        success: function (data){
            alert("Saved")
        },
        error: function (xhr, exception){
            alert("Error")
        }
    })
}


function updateStudent (){
    let stuID=$('#exampleFormControlInput1').val();
    let fname =$('#exampleFormControlInput2').val();
    let lname=$('#exampleFormControlInput5').val();
    let address=$('#exampleFormControlInput3').val();
    let number= $('#exampleFormControlInput4').val();
    let email=$('#exampleFormControlInput6').val();

    $.ajax({
        method:'PUT',
        contentType:'application/json',
        url: "http://localhost:8080/api/v1/students/updateStudent",
        async: true,
        data:JSON.stringify({
            "stuID":stuID,
            "stuFirstName":fname,
            "stuLastName": lname,
            "stuAddress": address,
            "stuNumber": number,
            "stuEmail": email
        }),
        success: function (data) {
            alert("Updated")
        },
        error: function (xhr, exception){
            alert("Update error")
        }
    })
}


function deleteStudent(){
    let stuID=$('#exampleFormControlInput1').val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/students/deleteStudent/"+stuID,
        async: true,

        success: function (data){
            alert("Deleted")
        },
        error: function (xhr, exception){
            alert("Delete Error")
        }
    })
}



function getAllStudents(){

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/students/getStudents",
        async: true,

        success: function (data){
            if (data.code==="00"){
                $('#stuTable').empty();
                for (let stu of data.content){
                    let stuID=stu.stuID
                    let fname=stu.stuFirstName
                    let lname=stu.stuLastName
                    let address=stu.stuAddress
                    let number=stu.stuNumber
                    let email=stu.stuEmail

                    var row=`<tr><td>${stuID}</td><td>${fname}</td><td>${lname}</td><td>${address}</td><td>${number}</td><td>${email}</td></tr>`;
                    $('#stuTable').append(row);
                }
            }
            alert("Get success")
        },
        error: function (xhr, exception){
            alert("Get fail")
        }
    })
}

function emailConfirm(){
    let stuMail=$('#exampleFormControlInput6').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/api/v1/mail/send",
        async: true,
        data: JSON.stringify({
            "toMail":stuMail
        }),
        success: function (data){
            alert("sent")
        },
        error: function (xhr, exception){
            alert("sent fail")
        }
    })
}


$(document).ready(function (){
    $(document).on('click','#stuTable tr',function (){
        var col0=$(this).find('td:eq(0)').text();
        var col1=$(this).find('td:eq(1)').text();
        var col2=$(this).find('td:eq(2)').text();
        var col3=$(this).find('td:eq(3)').text();
        var col4=$(this).find('td:eq(4)').text();
        var col5=$(this).find('td:eq(5)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput5').val(col2);
        $('#exampleFormControlInput3').val(col3);
        $('#exampleFormControlInput4').val(col4);
        $('#exampleFormControlInput6').val(col5);
    })
})


