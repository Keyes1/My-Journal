/*
 Shows the form to add a new entry.
 */
function newEntry() {
    document.getElementById('new-entry').classList.remove('hidden');
    document.getElementById('entries').classList.add('hidden');
}

/*
  Shows the list of entries.
 */
function viewEntries() {
    document.getElementById('new-entry').classList.add('hidden');
    document.getElementById('entries').classList.remove('hidden');
}

/*
  Saves the current entry in the form to the list of entries.
 */
function saveEntry() {
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value;
    let savedEntry = document.createElement('p');
    savedEntry.textContent = `Date: ${date} - Entry: ${entry}`;
    document.getElementById('entries').appendChild(savedEntry);
    document.getElementById('date').value = '';
    document.getElementById('entry').value = '';
}
