// SQL语句封裝
const user = {
    queryByUsername: 'SELECT * FROM user WHERE username=?',
    insertUser:'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
    queryByEmail: 'SELECT * FROM user WHERE email=?',
    updatePassword: 'UPDATE user SET password=? WHERE `email`=?',
    queryDevice: 'SELECT deviceName, isOnline, deviceID from device where ownerName=?',
    queryorderid: 'SELECT * from assignment where orderid=?',
    insertorder1:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1) VALUES (?, ?, ?, ?, ?)',
    insertorder2:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2) VALUES (?, ?, ?, ?, ?, ?)',
    insertorder3:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3) VALUES (?, ?, ?, ?, ?, ?, ?)',
    insertorder4:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder5:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder6:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder7:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder8:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder9:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8,  imageurl9) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insertorder10:'INSERT INTO assignment (orderid, orderer, numofimage, requires, imageurl1, imageurl2, imageurl3, imageurl4, imageurl5, imageurl6, imageurl7, imageurl8,  imageurl9,  imageurl10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    queryjobs:'SELECT * FROM assignment'
};
module.exports = {user};
// INSERT INTO order (orderid, orderer, numofimage, require, imageurl1) VALUES (?, ?, ?, ?, ?)