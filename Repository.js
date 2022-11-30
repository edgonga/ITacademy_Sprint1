accessDirOS = () => { 
    const { exec } = require('child_process')
    exec('dir', ("C:/Users"), (error, stdout, stderr) => {
        if(error) {
            console.log(error)
        }
        console.log(stdout)
    })
}


accessDirOS()

