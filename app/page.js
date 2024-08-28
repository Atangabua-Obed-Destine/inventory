'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, Firestore, getDocs, query, setDoc } from "firebase/firestore";
import { Box, Modal, Typography } from "@mui/material";
import { firestore } from "@/firebase";




export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    console.log(inventoryList)
  }

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDocs(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      }
      else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }

  }

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDocs(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }

  }



  useEffect(() => {
    updateInventory()
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Box 
    width="100vw" 
    height="100vh" 
    display="flex" 
    justifyContent="center"
    
    alignItems="center"
    gap={2}>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Box
        position="absolute"
        top="50%"
        left="50%"
        transform= 
        >

        </Box>
      </Modal>
      <Typography variant="h1"> Inventory Management</Typography>

    </Box>)
}
