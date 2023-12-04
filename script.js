$(document).ready(function () {
    const apiUrl = 'https://api.fbi.gov/wanted/v1/list';

    // Fetch wanted data from the FBI Wanted API
    $.get(apiUrl, function (data) {
        // Log the entire API response for reference
        console.log(data);

        // Extract relevant data
        const wantedList = data.items;

        // Loop through wanted list and create cards
        wantedList.forEach(function (wanted) {
            // Extract wanted information
            const photoUrl = wanted.images[0].large;
            const title = wanted.title;
            const description = wanted.description;

            // Create a card to display wanted information
            const cardHtml = `
                <div class="wanted-card">
                    <img class="photo" src="${photoUrl}" alt="Wanted Photo">
                    <div class="title">${title}</div>
                    <p class="description">${description}</p>
                </div>
            `;

            // Append the card to the wanted container
            $('#wanted-container').append(cardHtml);
        });
    });
});
