"use client"
import { CustomerServiceFilled } from "@ant-design/icons";
import { Button, Divider, Input } from "antd";
import { useState } from "react";

export default function LiveChat(){
    const [open, setOpen] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    return(
        <>
            <section onClick={() => setOpen(true)} title="Pesan langsung" className="livechat">
                <div >
                    <div><CustomerServiceFilled className="icon-cs"/></div>
                </div>
            </section>
            <section className="chatmodal" style={{display: open? "block" : "none"}}>
                <div className="header-modal">
                    <p style={{fontWeight: 'bold'}}>Live Chat 
                        <span style={{
                            fontSize: 12,
                            opacity: .7,
                            fontStyle: "italic",
                            marginLeft: 10,
                            color: isOnline? "green" : 'red'}}
                        >
                            ({isOnline ? "Online" : "Offline"})
                        </span>
                    </p>
                    <Button onClick={() => setOpen(!open)}>X</Button>
                </div>
                <Divider style={{margin: '0 0 20px 0'}}/>
                <div className="messages">
                    <div className="system-wrap">
                        <p className="system">Chats Message Chat message chat chat chat</p>
                    </div>
                    <div className="user-wrap">
                        <p className="user">Chats Message</p>
                    </div>
                    <div className="user-wrap">
                        <p className="user">Chats Message</p>
                    </div>
                    <div className="system-wrap">
                        <p className="system">Chats Message Chat message chat chat chat</p>
                    </div>
                </div>
                <Divider/>
                <div className="btn-modal">
                    <Input.TextArea className="chat-area" />
                    <Button type="primary">Kirim</Button>
                </div>
            </section>
        </>
    )
}