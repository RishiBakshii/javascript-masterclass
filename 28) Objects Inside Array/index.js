const blockedList=[
    {user:"John Doe",reason:"Abusive Content"},
    {user:"Sana Jones",reason:"Violating guidlines"}
]

for(let i=0;i<blockedList.length;i++){
    console.log(`${blockedList[i].user} blocked due to reason:  ${blockedList[i].reason}`)
}