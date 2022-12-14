const lastBackup = 1546300800

const changes = [
    [3, 1546301100],
    [2, 1546300800],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000]
]

function getFilesToBackup(lastBackup: number, changes: number[][]) {
    const res = [...new Set(changes.filter(item => item[1] > lastBackup).map(item => item[0]).sort((a, b) => a - b))];
    return res.length ? res : [];
}

console.log(getFilesToBackup(lastBackup, changes))