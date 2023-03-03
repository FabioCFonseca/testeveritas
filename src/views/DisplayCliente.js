import React from 'react'
import Header from '../Header'
import { format, parseISO } from 'date-fns'
 
const DisplayCliente = ({data}) => {
    let i = 0
    let p = 0
    let t = 0
    const contratosEmprestimo = []
    const contratosCartao = []
    const contratosRcc = []
    const dataNascFormat = data.dataNascimento != undefined && data.dataNascimento != "N/D" && data.dataNascimento != ""
    ? format(parseISO(data.dataNascimento), 'dd/MM/yyyy')
    : "";
    const dataDibFormat = data.dib != undefined && data.dib != "N/D" && data.dib != ""
    ? format(parseISO(data.dib), 'dd/MM/yyyy')
    : "";
    const dataInicioContratoFormat = data.contratosEmprestimo[i].dataInicioContrato != undefined && data.contratosEmprestimo[i].dataInicioContrato != "N/D" && data.contratosEmprestimo[i].dataInicioContrato != ""
    ? format(parseISO(data.contratosEmprestimo[i].dataInicioContrato), 'dd/MM/yyyy')
    : "";
    const competenciaInicioDescontoFormat = data.contratosEmprestimo[i].competenciaInicioDesconto != undefined && data.contratosEmprestimo[i].competenciaInicioDesconto != "N/D" && data.contratosEmprestimo[i].competenciaInicioDesconto != ""
    ? format(parseISO(data.contratosEmprestimo[i].competenciaInicioDesconto), 'dd/MM/yyyy')
    : "";
    const competenciaFimDescontoFormat = data.contratosEmprestimo[i].competenciaFimDesconto != undefined && data.contratosEmprestimo[i].competenciaFimDesconto != "N/D" && data.contratosEmprestimo[i].competenciaFimDesconto != ""
    ? format(parseISO(data.contratosEmprestimo[i].competenciaFimDesconto), 'dd/MM/yyyy')
    : "";
    const dataInclusaoFormat = data.contratosEmprestimo[i].dataInclusao != undefined && data.contratosEmprestimo[i].dataInclusao != "N/D" && data.contratosEmprestimo[i].dataInclusao != ""
    ? format(parseISO(data.contratosEmprestimo[i].dataInclusao), 'dd/MM/yyyy')
    : "";
    const dataInicioContratoCartFormat = data.contratosCartao[p].dataInicioContrato != undefined && data.contratosCartao[p].dataInicioContrato != "N/D" && data.contratosCartao[p].dataInicioContrato != ""
    ? format(parseISO(data.contratosCartao[p].dataInicioContrato), 'dd/MM/yyyy')
    : "";
    const dataInclusaoCartFormat = data.contratosCartao[p].dataInclusao != undefined && data.contratosCartao[p].dataInclusao != "N/D" && data.contratosCartao[p].dataInclusao != ""
    ? format(parseISO(data.contratosCartao[p].dataInclusao), 'dd/MM/yyyy')
    : "";
    const dataInicioContratoRccFormat = data.contratosRcc[t].dataInicioContrato != undefined && data.contratosRcc[t].dataInicioContrato != "N/D" && data.contratosRcc[t].dataInicioContrato != ""
    ? format(parseISO(data.contratosRcc[t].dataInicioContrato), 'dd/MM/yyyy')
    : "";
    const dataInclusaoRccFormat = data.contratosRcc[t].dataInclusao != undefined && data.contratosRcc[t].dataInclusao != "N/D" && data.contratosRcc[t].dataInclusao != ""
    ? format(parseISO(data.contratosRcc[t].dataInclusao), 'dd/MM/yyyy')
    : "";

    const valorBeneficioBr = data.valorBeneficio != undefined 
    ? data.valorBeneficio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const baseCalculoMargemConsignavelBr = data.margem.baseCalculoMargemConsignavel != undefined 
    ? data.margem.baseCalculoMargemConsignavel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const margemDisponivelEmprestimoBr = data.margem.margemDisponivelEmprestimo != undefined 
    ? data.margem.margemDisponivelEmprestimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const valorEmprestadoBr = data.contratosEmprestimo[i].valorEmprestado != undefined 
    ? data.contratosEmprestimo[i].valorEmprestado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const valorParcelaBr = data.contratosEmprestimo[i].valorParcela != undefined 
    ? data.contratosEmprestimo[i].valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const saldoQuitacaoBr = data.contratosEmprestimo[i].saldoQuitacao != undefined 
    ? data.contratosEmprestimo[i].saldoQuitacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";

    const valorReservadoCartFormat = data.contratosCartao[p].valorReservado != undefined 
    ? data.contratosCartao[p].valorReservado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    const valorReservadoRcc = data.contratosRcc[t].valorReservado != undefined 
    ? data.contratosRcc[t].valorReservado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : "";
    
    while (i < data.contratosEmprestimo.length) {
        contratosEmprestimo.push(
        <div key={data.contratosEmprestimo[i].contrato}>
            <h2 className='font-extrabold text-xl'>Contratos empréstimo {i+1} </h2>
            <h3>contrato: {data.contratosEmprestimo[i].contrato}</h3>
            <h2>Tipo de empréstimo</h2>
            <h3>Código: {data.contratosEmprestimo[i].tipoEmprestimo.codigo}</h3>
            <h3>Descrição: {data.contratosEmprestimo[i].tipoEmprestimo.descricao}</h3>
            <h2>Banco</h2>
            <h3>Código: {data.contratosEmprestimo[i].banco.codigo}</h3>
            <h3>Nome: {data.contratosEmprestimo[i].banco.nome}</h3>
            <h3>Data inicio contrato: {dataInicioContratoFormat}</h3>
            <h3>Competência inicio desconto: {competenciaInicioDescontoFormat}</h3>
            <h3>Competência fim desconto: {competenciaFimDescontoFormat}</h3>
            <h3>Data inclusão: {dataInclusaoFormat}</h3>
            <h3>Situação: {data.contratosEmprestimo[i].situacao}</h3>
            <h3>Excluído aps: {String(data.contratosEmprestimo[i].excluidoAps)}</h3>
            <h3>Excluído banco: {String(data.contratosEmprestimo[i].excluidoBanco)}</h3>
            <h3>Valor emprestado: {valorEmprestadoBr}</h3>
            <h3>Valor parcela: {valorParcelaBr}</h3>
            <h3>Quantidade parcelas: {data.contratosEmprestimo[i].quantidadeParcelas}</h3>
            <h3>Quantidade parcelas em aberto: {data.contratosEmprestimo[i].quantidadeParcelasEmAberto}</h3>
            <h3>Saldo quitação: {saldoQuitacaoBr}</h3>
            <h3>Taxa: {data.contratosEmprestimo[i].taxa}</h3>
            <br />
            <br />
        </div>);       
     i++;
    }

    while (p < data.contratosCartao.length) {
        contratosCartao.push(
        <div key={data.contratosCartao[p].contrato}>
            <h2 className='font-extrabold text-xl'>Contratos cartão {p+1}</h2>
            <h3>contrato: {data.contratosCartao[p].contrato}</h3>
            <h2>Tipo de empréstimo</h2>
            <h3>Código: {data.contratosCartao[p].tipoEmprestimo.codigo}</h3>
            <h3>Descrição: {data.contratosCartao[p].tipoEmprestimo.descricao}</h3>
            <h2>Banco</h2>
            <h3>Código: {data.contratosCartao[p].banco.codigo}</h3>
            <h3>Nome: {data.contratosCartao[p].banco.nome}</h3>
            <h3>Data inicio contrato: {dataInicioContratoCartFormat}</h3>
            <h3>Data inclusão: {dataInclusaoCartFormat}</h3>
            <h3>Situação: {data.contratosCartao[p].situacao}</h3>
            <h3>Excluído aps: {String(data.contratosCartao[p].excluidoAps)}</h3>
            <h3>Excluído banco: {String(data.contratosCartao[p].excluidoBanco)}</h3>
            <h3>Limite cartão: {data.contratosCartao[p].limiteCartao}</h3>
            <h3>Valor reservado: {valorReservadoCartFormat}</h3>           
            <br />
            <br />
        </div>);       
     p++;
     }

     while (t < data.contratosRcc.length) {
        contratosCartao.push(
        <div key={data.contratosRcc[t].contrato}>
            <h2 className='font-extrabold text-xl'>Contratos rcc {t+1}</h2>
            <h3>contrato: {data.contratosRcc[t].contrato}</h3>
            <h2>Tipo de empréstimo</h2>
            <h3>Código: {data.contratosRcc[t].tipoEmprestimo.codigo}</h3>
            <h3>Descrição: {data.contratosRcc[t].tipoEmprestimo.descricao}</h3>
            <h2>Banco</h2>
            <h3>Código: {data.contratosRcc[t].banco.codigo}</h3>
            <h3>Nome: {data.contratosRcc[t].banco.nome}</h3>
            <h3>Data inicio contrato: {dataInicioContratoRccFormat}</h3>
            <h3>Data inclusão: {dataInclusaoRccFormat}</h3>
            <h3>Situação: {data.contratosRcc[t].situacao}</h3>
            <h3>Excluído aps: {String(data.contratosRcc[t].excluidoAps)}</h3>
            <h3>Excluído banco: {String(data.contratosRcc[t].excluidoBanco)}</h3>
            <h3>Limite cartão: {data.contratosRcc[t].limiteCartao}</h3>
            <h3>Valor reservado: {valorReservadoRcc}</h3>        
            <br />
            <br />
        </div>);       
     t++;
     }

  return (
    <>
    <Header />  
    <div className="container mx-auto">
      <div className="font-sans font-medium text-lg leading-10">    
        <h1 className='font-extrabold text-xl'>Dados principais</h1>
        <h3>Nome: {data.nome}</h3>
        <h3>Beneficio: {data.beneficio}</h3>
        <h3>Data de nascimento: {dataNascFormat}</h3> 
        <h3>CPF: {data.cpf}</h3>
        <h3>Especie código: {data.especie.codigo}, {data.especie.descricao} </h3>
        <h3>Não perturbe: {data.NaoPerturbe}</h3>
        <h3>RG: {data.rg}</h3>
        <h3>DDB: {data.ddb}</h3>
        <h3>Nome mãe: {data.nomeMae}</h3>
        <h2>Endereço pessoal</h2>
        <h3>Endereço: {data.EnderecoPessoal.endereco}</h3>
        <h3>Bairro: {data.EnderecoPessoal.bairro}</h3>
        <h3>Cidade: {data.EnderecoPessoal.cidade}</h3>
        <h3>CEP: {data.EnderecoPessoal.cep}</h3>
        <h3>UF: {data.EnderecoPessoal.uf}</h3> 
        <br />
        <br />
        <h1 className='font-extrabold text-xl'>Dados bancários</h1>
        <h3>Banco: {data.dadosBancarios.banco.nome}</h3>
        <h3>Codigo: {data.dadosBancarios.banco.codigo}</h3>
        <h3>Tipo: {data.dadosBancarios.banco.tipo}</h3>
        <h3>Número: {data.dadosBancarios.banco.numero}</h3>
        <h3>Código da agência: {data.dadosBancarios.agencia.codigo}</h3>
        <h3>Nome: {data.dadosBancarios.agencia.nome}</h3>
        <h3>Endereço: {data.dadosBancarios.agencia.endereco.endereco} </h3>
        <h3>Bairro: {data.dadosBancarios.agencia.endereco.bairro} </h3>
        <h3>Cidade: {data.dadosBancarios.agencia.endereco.cidade} </h3>
        <h3>CEP: {data.dadosBancarios.agencia.endereco.cep} </h3>
        <h3>UF: {data.dadosBancarios.agencia.endereco.uf} </h3>
        <h3>Orgão pagador: {data.dadosBancarios.agencia.orgaoPagador} </h3>
        <h3>Meio de pagamento: {data.dadosBancarios.meioPagamento.tipo}</h3>
        <h3>Número: {data.dadosBancarios.meioPagamento.numero}</h3>
        <h3>Situação do benefício: {data.situacaoBeneficio}</h3>    
        <h3>NIT: {data.nit}</h3>    
        <h3>Identidade: {data.identidade}</h3>    
        <h3>Sexo: {data.sexo}</h3>    
        <h3>DIB: {dataDibFormat}</h3>    
        <h3>Valor do benefício: {valorBeneficioBr}</h3>    
        <h3>Representante legal: {data.possuiRepresentanteLegalProcurador}</h3>    
        <h3>Pensão alimentícia: {data.pensaoAlimenticia}</h3>    
        <h3>Bloqueio empréstimo: {data.bloqueioEmprestismo}</h3>    
        <h3>Benefício permite empréstimo: {data.beneficioPermiteEmprestimo}</h3>  
        <br />
        <br />
        <h1 className='font-extrabold text-xl'>Margem</h1>
        <h3>Competência: {data.margem.competencia}</h3>  
        <h3>Base calc margem consig: {baseCalculoMargemConsignavelBr}</h3>
        <h3>Margem disp empréstimo: {margemDisponivelEmprestimoBr}</h3>
        <h3>Percent margem disp empréstimo: {data.margem.percentualMargemDisponivelEmprestimo}</h3>
        <h3>Percent margem total empréstimo: {data.margem.percentualMargemTotalEmprestimo}</h3>
        <h3>Quantidade empréstimo: {data.margem.quantidadeEmprestimo}</h3>
        <h3>Possui cartão: {data.margem.possuiCartao}</h3>
        <h3>Margem disp cartão: {data.margem.margemDisponivelCartao}</h3>
        <h3>Percent margem disp cartão: {data.margem.percentualmargemDisponivelCartao}</h3>
        <h3>Percent margem total cartão: {data.margem.percentualMargemTotalCartao}</h3>
        <h3>Margem disp rcc: {data.margem.margemDisponivelRcc}</h3>
        <h3>Margem disp empréstimo on: {data.margem.margemDisponivelEmprestimoOn}</h3> 
        <br />
        <br />     
        {contratosEmprestimo}
        {contratosCartao}
        {contratosRcc}
      </div>    
    </div>
    </>
  )
}

export default DisplayCliente
