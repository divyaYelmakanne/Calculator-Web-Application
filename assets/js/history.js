// History management is integrated in calculator.js
// This file handles export functionality

document.getElementById('export-history').addEventListener('click', () => {
    const history = calculator.history;
    if (history.length === 0) {
        alert('No history to export');
        return;
    }

    // Export as JSON
    const dataStr = JSON.stringify(history, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = 'calculator_history.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
});
