(function() {
    const noteDocument = $(document)
    const createButton = $('#create-btn')
    const notesList    = $('.list-group.list-group-flush')

    const helpers = {
        // On click, create a new note and redirect to it
        createNoteAndRedirect: evt => {
            axios.post('/api/notes').then(response => (window.location = '/notes/'+response.data.data.Slug))
        },

}())