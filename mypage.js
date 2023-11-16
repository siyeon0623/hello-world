// 사용자 프로필 이미지와 키워드 목록 요소 가져오기
const userProfileImage = document.getElementById('userProfileImage');
const userImagePaths = [
    '사용자1의 프로필 이미지 경로',
    '사용자2의 프로필 이미지 경로',
    // 여러 사용자의 이미지 경로를 추가합니다.
];

// Get the keywordList element
const keywordList = document.getElementById("keywordList");

// Get the keywordForm element
const keywordForm = document.getElementById("keywordForm");

// Get the keyword input field
const keywordInput = document.getElementById("keyword");

// Add an event listener for form submission
keywordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the entered keyword
    const keyword = keywordInput.value;

    // Get the current keyword list items
    const keywords = keywordList.querySelectorAll("li");

    // Only add the keyword if the list has less than 4 items
    if (keywords.length < 4) {
        // Create a new list item for the keyword
        const listItem = document.createElement("li");
        listItem.textContent = keyword;

        // Create a delete button for the list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";

        // Add a click event listener to the delete button
        deleteButton.addEventListener("click", function () {
            // Remove the corresponding list item when the delete button is clicked
            listItem.remove();
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the keyword list
        keywordList.appendChild(listItem);

        // Clear the input field
        keywordInput.value = "";
    }
});

// 가상의 데이터 (date와 stardonation에 대한 데이터)
const data = {
    labels: ["2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05"],
    datasets: [
        {
            label: "스타 기부",
            data: [1000, 2000, 1500, 2500, 1800],
            borderColor: "#F44D99",
            backgroundColor: "transparent",
        },
    ],
};

// 그래프를 그릴 canvas 요소 가져오기
const ctx = document.getElementById("myChart").getContext("2d");

// 차트 데이터 예시 (날짜와 스타 기부량)
const dates = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'];
const starDonations = [100, 250, 150, 300, 200];

// 그래프 생성
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates, // x축 레이블 (날짜)
        datasets: [{
            label: '스타 기부량',
            data: starDonations, // y축 데이터 (스타 기부량)
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false, // 선 그래프로 만들기
        }],
    },
    options: {
        scales: {
            x: [{
                display: true,
            }],
            y: [{
                display: true,
                beginAtZero: true,
            }],
        },
    },
});
