import {
    Keypair, 
    Connection, 
    SystemProgram, 
    VersionedTransaction,
    Message,
    LAMPORTS_PER_SOL,
    TransactionMessage
}


from "@solana/web3.js"

// Yeni bir cüzdan oluşturuyorum. Bu cüzdanın özel anhtarı
const privateKey = [228,213,64,112,252,153,80,
    230,43,98,234,227,77,196,111,219,150,139,
    145,123,33,180,2,114,236,124,76,187,76,66,
    193,123,192,195,161,17,200,8,97,216,1,102,
    201,35,89,191,29,7,77,117,203,179,179,244,
    48,73,252,82,160,41,97,147,170,194]

// solana devnet ağına bağlanmak için
const connection = new Connection ("https://api.devnet.solana.com","confirmed");

//Özel anahtarı kullanarak bir anahtar çifti(keypair) oluşturdum.
const edahesap = Keypair.fromSecretKey(Uint8Array.from(privateKey))

//Oluşturduğum bu anahtar çiftinin genel anahtarını(public key) ekrana yazdırıyorum.
const cikti = async() => {
    console.log("Cüzdan hesabı => "+edahesap.publicKey.toString())
    //Genel anahtara ait bilgileri devnet'ten alırız
    const deneme = await connection.getAccountInfo(edahesap.publicKey)
   console.log(deneme.lamports) //cüzdandaki lamports mik. yazar.
}

cikti()