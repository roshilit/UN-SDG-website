const form = document.getElementById('form');
    form.addEventListener('submit', function(event) {

        event.preventDefault();
        const name = document.getElementById('usersname').value;
        const email = document.getElementById('email').value;
        const visit = document.querySelector('input[name="visit"]:checked');
        const nav = document.querySelector('input[name="nav"]:checked');
        const suggestions = document.getElementById('suggesions').value;
        const satisfaction = document.querySelector('input[name="satis"]:checked');
        const recommend = document.querySelector('input[name="recommend"]:checked');
        const receiveUpdates = document.querySelector('input[name="update"]:checked');
        const updateMethod = document.getElementById('update').value;
        const comment = document.getElementById('comment').value;

        if (name.trim() === '' || email.trim() === '' || comment.trim() === '' || !isValidEmail(email)) {
            alert('Please fill in all required fields and provide a valid email address.');
            return;
        }

        printEditablePreview(name, email, visit, nav, suggestions, satisfaction, recommend, receiveUpdates, updateMethod, comment); //calls the function printEditablePreview()

        printThankYouMessage();
        
    });


    //function to check if the user enters a valid email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    //function that provides a editable preview to the user
    function printEditablePreview(name, email, visit, nav, suggestions, satisfaction, recommend, receiveUpdates, updateMethod, comment) {
        const previewHTML = `
            <h2>Feedback Preview</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Visited:</strong> ${visit ? visit.value : 'Not selected'}</p>
            <p><strong>User Friendly:</strong> ${nav ? nav.value : 'Not selected'}</p>
            <p><strong>Suggestions:</strong> ${suggestions}</p>
            <p><strong>Satisfaction:</strong> ${satisfaction ? satisfaction.value : 'Not selected'}</p>
            <p><strong>Recommend:</strong> ${recommend ? recommend.value : 'Not selected'}</p>
            <p><strong>Receive Updates:</strong> ${receiveUpdates ? receiveUpdates.value : 'Not selected'}</p>
            <p><strong>Update Method:</strong> ${updateMethod}</p>
            <p><strong>Comment:</strong> ${comment}</p>
            <button onclick="editForm()">Edit</button> 
            <button onclick="printUpdatedForm()" id="done-button">Done</button>
        `;
        // edit button to go back and edit the preview
        //done button to confirm the feedback 

        const previewContainer = document.createElement('div');
        previewContainer.innerHTML = previewHTML;
        previewContainer.id = 'preview';
        form.insertAdjacentElement('afterend', previewContainer);
        form.style.display = 'none'; 
    }


    //function that allows user to edit the feedback 
    function editForm() {
        const preview = document.getElementById('preview');
        const form = document.getElementById('form');
        preview.parentNode.removeChild(preview); 
        form.style.display = 'block'; 
    }

    //function that print the latest feedback and prints the thank you message after the user clicks the done button
    function printUpdatedForm() {
        const thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = '<h2>We value your feedback!</h2>';
        thankYouMessage.id = 'thank-you-message';
        form.insertAdjacentElement('afterend', thankYouMessage);
    
        const preview = document.getElementById('preview');
        preview.parentNode.removeChild(preview);
        const doneButton = document.getElementById('done-button');
        doneButton.parentNode.removeChild(doneButton); 
    }