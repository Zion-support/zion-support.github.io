it(displays expected content', () => {';';';';';
    render(<Sitemap  />)',';';';';
    ';';';';';
import { render, screen } from &apos;@testing-library/react',';';';';';
    ',';';';';
    ';';';';';
import Sitemap from &apos;./Sitemap';
describe(&apos;Sitemap&apos, () => {
  it(&apos;renders without crashing&apos, () => {
    render(&apos}}&apos;<Sitemap  />)';
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it(&apos;displays expected content&apos, () => {';';';
    render(&apos}<Sitemap  />)';';';';
    // Add specific test assertions based on component content})})';';';';';
    render(<Sitemap  />)',';';';';
    ';';';';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""';';
})';';';
";';';';';
}}';';';';';
"';';';';;';;';
it(displays expected content',() => {';';'; render(<Sitemap />)',';'; ';';'; import { render,screen } from &apos;@testing-library/react',';';'; ',';'; ';';'; import Sitemap from &apos;./Sitemap'; describe(&apos;Sitemap&apos,() => { it(&apos;renders without crashing&apos,() => { render(&apos}}&apos;<Sitemap />) expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()}) it(&apos;displays expected content&apos,() => {'; render(&apos}<Sitemap />)';'; render(<Sitemap />)',';'; ';';'; expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();"" })'; ";';'}}';';'; "';';';';
<<<<<<< HEAD
it(displays expected content',() => {';';'; render(<Sitemap />)',';'; ';';'; import { render,screen } from &apos;@testing-library/react',';';'; ',';'; ';';'; import Sitemap from &apos;./Sitemap'; describe(&apos;Sitemap&apos,() => { it(&apos;renders without crashing&apos,() => { render(&apos}}&apos;<Sitemap />) expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()}) it(&apos;displays expected content&apos,() => {'; render(&apos}<Sitemap />)';'; render(<Sitemap />)',';'; ';';'; expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();"" })'; ";';'}}';';'; ";
=======
it(displays expected content',() => {';';'; render(<Sitemap />)',';'; ';';'; import { render,screen } from &apos;@testing-library/react',';';'; ',';'; ';';'; import Sitemap from &apos;./Sitemap'; describe(&apos;Sitemap&apos,() => { it(&apos;renders without crashing&apos,() => { render(&apos}}&apos;<Sitemap />) expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()}) it(&apos;displays expected content&apos,() => {'; render(&apos}<Sitemap />)';'; render(<Sitemap />)',';'; ';';'; expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();"" })'; ";';'}}';';'; ";
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
