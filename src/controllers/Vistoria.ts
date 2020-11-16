import { Request, Response } from "express";

export default {
  
  async ceateVistoria(request: Request, response: Response ){
    let pdf= require('html-pdf');
    const {name, time}= request.body;
    
    console.log(`sucesso, local da vistoria: ${name} horário: ${time} `);
    const data = {
      name, time,
    }
    let nomePDF = Date.now() +'nomeArquivo';
    pdf.create(`sucesso, local da vistoria: ${name} horário: ${time} `, {}).toFile(`./uploads/${nomePDF}.pdf`, (err: Error, res: Response)=>{
      if(err){
        console.log()
      }else{
        console.log(res)
      }
    });

    return response.status(201).json(data);
  }
}