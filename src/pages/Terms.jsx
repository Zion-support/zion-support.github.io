import TermsOfService from "@/legal/TermsOfService";

export default function Terms() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
            <div className="container mx-auto px-4">
                <TermsOfService />
            </div>
        </div>
    );
}
