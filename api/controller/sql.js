// SQL语句封裝
const user = {
    queryByUsername: 'SELECT * FROM user WHERE username=?',
    insertUser:'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
    queryByEmail: 'SELECT * FROM user WHERE email=?',
    updatePassword: 'UPDATE user SET password=? WHERE `email`=?',
    queryDevice: 'SELECT deviceName, isOnline, deviceID from device where ownerName=?',
    queryorderid: 'SELECT * from assignment where orderid=?',
    insertorder1:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, state) VALUES (?, ?, ?, ?, ?, ?)',
    insertorder2:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, state) VALUES (?, ?, ?, ?, ?, ?, ?)',
    insertorder3:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder4:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder5:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder6:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder7:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder8:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder9:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8,  imageurl9, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder10:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8,  imageurl9,  imageurl10, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    queryjobs:'SELECT * FROM assignment',
    querymyrelease:'SELECT * FROM assignment WHERE orderer=?',
    querymyreceive:'SELECT * FROM assignment WHERE accepter=?',
    claimtask:'UPDATE assignment SET state=?, accepter=? WHERE `orderid`=?',
    uploaddata:'UPDATE assignment SET state=?, annotationdata=? WHERE `orderid`=?',
    getdata:'SELECT annotationdata from assignment where orderid=?',
    pass:'UPDATE assignment SET state=? WHERE `orderid`=?',
};
module.exports = {user};
// INSERT INTO order (orderid, orderer, numofimage, require, imageurl1) VALUES (?, ?, ?, ?, ?)