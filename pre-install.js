// This is a file called "pre-install.js" in the root of the project
if (process.platform === 'linux') {
    console.log('Linux detected, run commands for Android builds here');
  } else if (process.platform === 'darwin') {
    console.log('macOS detected, run commands for iOS builds here');
  }