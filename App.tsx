import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

// Import des pages principales
import { HomePage } from "./components/HomePage";
import { UserDashboard } from "./components/UserDashboard";
import { LoginPageGescom } from "./components/LoginPageGescom";
import { EntitySelectionPage } from "./components/EntitySelectionPage";
import { NewsPageNew } from "./components/NewsPageNew";
import { ContactPage } from "./components/ContactPage";
import { SupportPage } from "./components/SupportPage";
import { LegalPage } from "./components/LegalPage";
import { AboutPage } from "./components/AboutPage";
import { CookiesPage } from "./components/CookiesPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsPage } from "./components/TermsPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { DecorativeBackground } from "./components/DecorativeBackground";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginGescom, setShowLoginGescom] = useState<boolean>(false);
  const [showEntitySelection, setShowEntitySelection] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [selectedEntity, setSelectedEntity] = useState<string>("");
  const [backgroundVariant, setBackgroundVariant] = useState<"subtle" | "geometric" | "gradient" | "dots" | "waves" | "clean">("subtle");

  const renderCurrentPage = () => {
    // Si l'utilisateur est connecté, afficher le dashboard
    if (isLoggedIn) {
      return (
        <UserDashboard 
          selectedEntity={selectedEntity}
          onEntityChange={(entity) => {
            setSelectedEntity(entity);
          }}
          onChangeEntity={() => {
            setIsLoggedIn(false);
            setShowEntitySelection(true);
          }}
          onLogout={() => {
            setIsLoggedIn(false);
            setSelectedEntity("");
            setUserName("");
            setCurrentPage("home");
          }} 
        />
      );
    }

    // Si la page de sélection d'entité est affichée
    if (showEntitySelection) {
      return (
        <EntitySelectionPage 
          userName={userName}
          onEntitySelect={(entity) => {
            setSelectedEntity(entity);
            setShowEntitySelection(false);
            setIsLoggedIn(true);
          }}
          onLogout={() => {
            setShowEntitySelection(false);
            setShowLoginGescom(false);
            setUserName("");
            setCurrentPage("home");
          }}
          onPageChange={setCurrentPage}
        />
      );
    }

    // Si la page de login Gescom est affichée
    if (showLoginGescom) {
      return (
        <LoginPageGescom 
          onBack={() => setShowLoginGescom(false)}
          onEntitySelectionNeeded={(name) => {
            setUserName(name);
            setShowLoginGescom(false);
            setShowEntitySelection(true);
          }}
          onPageChange={setCurrentPage}
          onOpenSupport={() => {
            setShowLoginGescom(false);
            setCurrentPage("support");
          }}
        />
      );
    }

    // Pages publiques
    switch (currentPage) {
      case "contact":
        return <ContactPage />;
      case "support":
        return <SupportPage onPageChange={setCurrentPage} />;
      case "news":
        return <NewsPageNew onPageChange={setCurrentPage} />;
      case "legal":
        return <LegalPage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "cookies":
        return <CookiesPage onNavigate={setCurrentPage} />;
      case "privacy-policy":
        return <PrivacyPolicyPage onNavigate={setCurrentPage} />;
      case "terms":
        return <TermsPage onNavigate={setCurrentPage} />;
      case "home":
      default:
        return (
          <HomePage 
            onPageChange={setCurrentPage} 
            onLoginSuccess={() => setIsLoggedIn(true)}
            onShowLogin={() => setShowLoginGescom(true)}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background relative">
          {/* Fond décoratif */}
          {!showLoginGescom && !showEntitySelection && <DecorativeBackground variant={backgroundVariant} />}
          
          {/* Toast notifications */}
          <Toaster position="bottom-center" />
          
          {/* NavBar pour les pages publiques */}
          {!isLoggedIn && !showLoginGescom && !showEntitySelection && currentPage !== "home" && currentPage !== "support" && currentPage !== "news" && (
            <NavBar currentPage={currentPage} onPageChange={setCurrentPage} />
          )}
          
          {/* Contenu principal */}
          {renderCurrentPage()}

          {/* Footer pour les pages publiques */}
          {!isLoggedIn && !showLoginGescom && !showEntitySelection && currentPage !== "home" && currentPage !== "support" && currentPage !== "news" && (
            <>
              <Footer currentPage={currentPage} onPageChange={setCurrentPage} />
              <BackToTop />
            </>
          )}
        </div>
      </TooltipProvider>
    </LanguageProvider>
  );
}