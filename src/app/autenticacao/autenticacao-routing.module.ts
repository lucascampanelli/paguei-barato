import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticacaoPage } from './autenticacao.page';
import { CadastroEmailComponent } from './componentes/cadastro/cadastro-email/cadastro-email.component';
import { CadastroNomeComponent } from './componentes/cadastro/cadastro-nome/cadastro-nome.component';
import { CadastroSenhaComponent } from './componentes/cadastro/cadastro-senha/cadastro-senha.component';
import { CadastroSobrenomeComponent } from './componentes/cadastro/cadastro-sobrenome/cadastro-sobrenome.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro/nome',
    component: CadastroNomeComponent
  },
  {
    path: 'cadastro/sobrenome',
    component: CadastroSobrenomeComponent
  },
  {
    path: 'cadastro/email',
    component: CadastroEmailComponent
  },
  {
    path: 'cadastro/senha',
    component: CadastroSenhaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacaoPageRoutingModule {}
