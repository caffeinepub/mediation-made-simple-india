import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Include authorization logic
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // --------------------------------------
  // User Profile Management
  // --------------------------------------

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // --------------------------------------
  // Dispute Categories (Static)
  // --------------------------------------

  // Explicit enum type for category types
  public type categoryTypeEnum = {
    #property;
    #divorce;
    #business;
    #consumer;
    #money;
    #employment;
    #neighborhood;
    #family;
  };

  public type DisputeCategory = {
    categoryTypeEnum : categoryTypeEnum;
    title : Text;
    description : Text;
    isMediationSuitable : Bool;
    mediationReason : Text;
    legalAdvice : Text;
  };

  let allCategories : [DisputeCategory] = [
    {
      categoryTypeEnum = #property;
      title = "Property Disputes";
      description = "Disputes related to ownership, boundaries, or use of property.";
      isMediationSuitable = true;
      mediationReason = "Mediation is suitable because property disputes often involve ongoing relationships and can be resolved through negotiation.";
      legalAdvice = "Consult a lawyer if you have complex ownership issues or legal documentation is required.";
    },
    {
      categoryTypeEnum = #divorce;
      title = "Divorce Disputes";
      description = "Conflicts arising from divorce, including asset division, child custody, and support.";
      isMediationSuitable = true;
      mediationReason = "Mediation can help parties reach amicable agreements, especially when children are involved.";
      legalAdvice = "Seek legal advice for complex financial matters or if there is a history of abuse.";
    },
    {
      categoryTypeEnum = #business;
      title = "Business Disputes";
      description = "Disputes between businesses, partners, or clients.";
      isMediationSuitable = true;
      mediationReason = "Mediation is often preferred to maintain business relationships and avoid lengthy court battles.";
      legalAdvice = "Consult a lawyer for contract disputes or if large sums of money are involved.";
    },
    {
      categoryTypeEnum = #consumer;
      title = "Consumer Complaints";
      description = "Issues with products, services, or warranties.";
      isMediationSuitable = true;
      mediationReason = "Mediation can resolve disputes quickly and is often less expensive than legal action.";
      legalAdvice = "Contact consumer protection agencies for additional support.";
    },
    {
      categoryTypeEnum = #money;
      title = "Money Matters";
      description = "Disputes over loans, repayments, or financial transactions.";
      isMediationSuitable = true;
      mediationReason = "Mediation can help find mutually agreeable repayment plans.";
      legalAdvice = "Seek legal advice for large sums or complex financial arrangements.";
    },
    {
      categoryTypeEnum = #employment;
      title = "Employment Issues";
      description = "Conflicts between employers and employees.";
      isMediationSuitable = true;
      mediationReason = "Mediation promotes resolution while preserving workplace relationships.";
      legalAdvice = "Consult a labor lawyer for complex employment law issues.";
    },
    {
      categoryTypeEnum = #neighborhood;
      title = "Neighborhood Disputes";
      description = "Conflicts between neighbors over boundaries, noise, or shared spaces.";
      isMediationSuitable = true;
      mediationReason = "Mediation fosters communication and helps maintain good neighborly relations.";
      legalAdvice = "Seek legal guidance for persistent or legal boundary issues.";
    },
    {
      categoryTypeEnum = #family;
      title = "Family Matters";
      description = "Disputes within families not related to divorce.";
      isMediationSuitable = true;
      mediationReason = "Mediation supports healthy communication within families.";
      legalAdvice = "Consult a family lawyer for complex inheritance or custody matters.";
    },
  ];

  // --------------------------------------
  // Dispute Guidance Logic
  // --------------------------------------

  public type DoAndDont = {
    dos : [Text];
    donts : [Text];
  };

  public type DisputeSpecificGuidance = {
    contextSpecificExamples : [Text];
    mediationSuitabilityGuidance : Text;
    legalInformation : Text;
    nextSteps : [Text];
    dosAndDonts : DoAndDont;
  };

  public type GuidanceResult = {
    category : DisputeCategory;
    fullDispute : DisputeSpecificGuidance;
  };

  private func findCategoryByType(categoryTypeEnum : categoryTypeEnum) : ?DisputeCategory {
    allCategories.find(func(cat) { cat.categoryTypeEnum == categoryTypeEnum });
  };

  func getDisputeSpecificGuidanceForType(categoryTypeEnum : categoryTypeEnum) : DisputeSpecificGuidance {
    switch (categoryTypeEnum) {
      case (#property) {
        {
          contextSpecificExamples = [
            "争用已建房产所有权",
            "边界线不明导致的争端",
            "共同财产分割与继承权纠纷",
            "土地租赁与所有权冲突",
          ];
          mediationSuitabilityGuidance =
            "Property disputes are often well-suited for mediation. Mediation is particularly helpful where ongoing relationships exist (e.g., neighbors, joint owners) or where there is potential for negotiation about boundaries or shared use. Mediation is less suitable for severe encroachments or high-value property where legal documentation is critical.";
          legalInformation =
            "To avoid litigation, always maintain clear property records. Ensure land titles/deeds are properly registered with local authorities and use qualified professionals for property measurements and boundaries.";
          nextSteps = [
            "Attempt direct negotiation with the other party",
            "Gather all existing property documentation",
            "Consult a local property expert if needed",
            "Consider proposing joint mediation",
          ];
          dosAndDonts = {
            dos = [
              "Maintain up-to-date property documents",
              "Seek professional mediation if initial talks fail",
              "Record all agreements in writing",
            ];
            donts = [
              "Do not make unauthorized changes to boundaries",
              "Avoid escalatory actions or harassment",
              "Do not ignore legal notices",
            ];
          };
        };
      };
      case (#divorce) {
        {
          contextSpecificExamples = [
            "Child custody disputes",
            "Equitable asset division",
            "Negotiating spousal support",
            "Joint property management",
          ];
          mediationSuitabilityGuidance =
            "Divorce disputes are suitable for mediation where parties seek amicable solutions, particularly with ongoing child custody agreements. Mediation is less suitable in cases of abuse, unwillingness to disclose assets, or disputes involving court-mandated separation terms.";
          legalInformation = "Legal professionals are crucial for validating financial agreements in divorce. In India, engage certified professionals for child custody matters to ensure arrangements align with family law.";
          nextSteps = [
            "Discuss mediation with legal counsel",
            "Involve financial experts if needed",
            "Consider collaborative approaches for custody disputes",
            "Formalize documented agreements with legal assistance",
          ];
          dosAndDonts = {
            dos = [
              "Maintain complete financial records",
              "Prioritize children's interests in custody discussions",
              "Verify mediator qualifications",
            ];
            donts = [
              "Do not refuse mediation or negotiation",
              "Avoid aggressive exchanges or concealment of assets",
              "Do not sign agreements without legal review",
            ];
          };
        };
      };
      case (#business) {
        {
          contextSpecificExamples = [
            "Business partnership conflicts",
            "Contractual interpretation disputes",
            "Vendor/supplier disagreements",
            "Joint venture dissolution",
          ];
          mediationSuitabilityGuidance =
            "Mediation is highly effective for business disputes involving ongoing relationships and situations where contractual obligations are disputed. It is less appropriate for cases with fraudulent activity, significant legal precedent, or retaliatory business practices.";
          legalInformation =
            "Business mediation in India is widely accepted. Ensure business contracts include mediation clauses, and leverage professional business mediators for complex cases involving cross-border transactions.";
          nextSteps = [
            "Attempt direct negotiation with involved parties",
            "Consult independent business experts",
            "Propose formal mediation through impartial intermediaries",
            "Document all negotiation outcomes diligently",
          ];
          dosAndDonts = {
            dos = [
              "Maintain transparent communication",
              "Complete regular contract reviews",
              "Engage expert mediators for complex disputes",
            ];
            donts = [
              "Do not ignore early dispute resolution opportunities",
              "Avoid unilateral contract changes",
              "Do not attempt retaliation through business means",
            ];
          };
        };
      };
      case (#consumer) {
        {
          contextSpecificExamples = [
            "Product warranty issues",
            "Service quality complaints",
            "Consumer rights violations",
            "Refund disputes with retailers",
          ];
          mediationSuitabilityGuidance =
            "Consumer disputes are well-suited for mediation, especially for product or service complaints with a willingness to negotiate. Avoid mediation for cases involving fraudulent activities or persistent non-compliance by businesses.";
          legalInformation =
            "India has well-established consumer rights. Contact the Indian Consumer Helpline at 1800-11-4000 for assistance. The Consumer Protection Act (2019) provides a robust legal framework for resolving consumer grievances.";
          nextSteps = [
            "Contact customer service channels directly",
            "Research and understand your consumer rights",
            "Document all communications with service providers",
            "Seek professional mediation if unresolved",
          ];
          dosAndDonts = {
            dos = [
              "Thoroughly document product/service issues",
              "Request written verification of warranty terms",
              "Report unsatisfactory resolutions to consumer authorities",
            ];
            donts = [
              "Do not accept incomplete resolutions",
              "Avoid making payment for incomplete services",
              "Do not rely solely on verbal agreements",
            ];
          };
        };
      };
      case (#money) {
        {
          contextSpecificExamples = [
            "Personal loan repayment disputes",
            "Incorrect bank transaction issues",
            "Shared investment conflicts",
            "Family borrowing repayment conflicts",
          ];
          mediationSuitabilityGuidance =
            "Money-related disputes are suitable for mediation when parties are willing to negotiate payment plans. Avoid mediation for high-value disputes or fraudulent financial activity, as legal intervention may be necessary.";
          legalInformation =
            "India has strong legal protections for financial assets. Ensure all financial transactions are documented to prevent future disputes, and seek legal advice for high-value disputes.";
          nextSteps = [
            "Attempt initial negotiation with the other party",
            "Document all repayment agreements",
            "Propose professional mediation if initial attempts fail",
            "Involve legal counsel for complex financial disputes",
          ];
          dosAndDonts = {
            dos = [
              "Clearly communicate repayment expectations",
              "Secure written acknowledgement from all parties",
              "Utilize formal mediation for persistent disputes",
            ];
            donts = [
              "Do not make unsupported claims",
              "Avoid inconsistencies in repayment terms",
              "Do not accept incomplete evidence",
            ];
          };
        };
      };
      case (#employment) {
        {
          contextSpecificExamples = [
            "Workplace policy interpretation",
            "Conflicts between employees and supervisors",
            "Disciplinary process disputes",
            "Wage-related disputes",
          ];
          mediationSuitabilityGuidance =
            "Employment disputes, especially those related to ongoing workplace relationships (e.g., policy interpretation, interpersonal conflicts), are well-suited for mediation. More serious matters such as discrimination or unlawful dismissals may require judicial intervention.";
          legalInformation =
            "Maintain thorough documentation of employer communications and employment terms. Consult labor advocates for employment-related advice and review relevant employment legislation for guidance. Labor unions or independent consultants may also provide valuable support.";
          nextSteps = [
            "Conduct an internal review of company policies",
            "Consult with HR departments where applicable",
            "Seek external mediation if internal attempts fail",
            "Document all resolutions for future reference",
          ];
          dosAndDonts = {
            dos = [
              "Adhere to documented company policies",
              "Take concerns to HR departments before litigation",
              "Request written clarification in ambiguous situations",
            ];
            donts = [
              "Do not ignore clearly documented employment terms",
              "Avoid aggressive demands in initial negotiations",
              "Do not delay HR consultation for workplace issues",
            ];
          };
        };
      };
      case (#neighborhood) {
        {
          contextSpecificExamples = [
            "Noise complaints",
            "Shared boundary disputes",
            "Parking space conflicts",
            "Use of shared amenities",
          ];
          mediationSuitabilityGuidance =
            "Boundary and shared use disputes are highly suitable for mediation, particularly when there is willingness to compromise. Formal legal action may be necessary for persistent disputes, property damages, or legal violations.";
          legalInformation =
            "Collaborative solutions can prevent escalation. Ensure compliance with local regulations and reach out to local authorities for resolution guidance. Mediation may involve neutral facilitators, community leaders, or legal representatives.";
          nextSteps = [
            "Seek direct resolution through communication with all parties",
            "Involve third parties where neutral facilitation is required",
            "Document agreed-upon solutions for future reference",
            "Report severe violations to appropriate authorities",
          ];
          dosAndDonts = {
            dos = [
              "Maintain respectful communication with neighbors",
              "Seek collaborative solutions where possible",
              "Escalate only when all amicable solutions are exhausted",
            ];
            donts = [
              "Do not resort to aggressive or disruptive behavior",
              "Avoid legal threats without exhausting negotiation",
              "Do not ignore persistent disputes requiring formal intervention",
            ];
          };
        };
      };
      case (#family) {
        {
          contextSpecificExamples = [
            "Inheritance disputes",
            "Joint property management",
            "Fund allocation disagreements",
            "Family business financial decisions",
          ];
          mediationSuitabilityGuidance =
            "Family inheritance and financial disagreements are highly suitable for mediation when parties are open to negotiation. A professional approach is recommended for persistent conflicts involving significant financial assets or complex legal cases.";
          legalInformation =
            "Comprehensive documentation and compliance with legal statutes are crucial for navigating complex scenarios related to inheritance and family property. Family counseling or psychological interventions may provide additional support for relationship-specific issues.";
          nextSteps = [
            "Seek family mediation or counseling for communication challenges",
            "Involve legal oversight in financial disputes or inheritance matters",
            "Implement binding agreements for shared family property",
            "Engage professional family mediators for persistent conflicts",
          ];
          dosAndDonts = {
            dos = [
              "Combine mediation with counseling for complex matters",
              "Review regulations and seek expert guidance as needed",
              "Secure legal evaluation in financial arrangements",
            ];
            donts = [
              "Do not ignore family disputes requiring professional intervention",
              "Avoid relying solely on informal agreements",
              "Do not refuse financial oversight for family matters",
            ];
          };
        };
      };
    };
  };

  // Get rich guidance based on category
  public query ({ caller }) func getGuidanceByCategory(categoryTypeEnum : categoryTypeEnum) : async ?GuidanceResult {
    switch (findCategoryByType(categoryTypeEnum)) {
      case (null) { null };
      case (?category) {
        let dispute = getDisputeSpecificGuidanceForType(categoryTypeEnum);
        ?{
          category;
          fullDispute = dispute;
        };
      };
    };
  };

  // Basic keyword matching for category-type mapping
  private func matchKeywords(description : Text, keywords : [Text]) : Bool {
    keywords.any(func(kw) { description.contains(#text(kw)) });
  };

  // Chatbot-style guidance input
  public query ({ caller }) func getGuidanceByDescription(desc : Text) : async {
    bestMatch : ?DisputeCategory;
    confidence : Nat8;
    guidance : ?GuidanceResult;
  } {
    let lowercaseDescription = desc.toLower();
    var bestMatch : (?DisputeCategory, Nat8) = (null, 0);

    // Find best matching category using keyword matching
    for (category in allCategories.values()) {
      let keywords = switch (category.categoryTypeEnum) {
        case (#property) { ["property", "ownership", "boundary"] };
        case (#divorce) { ["divorce", "custody", "assets"] };
        case (#business) { ["business", "contract", "client"] };
        case (#consumer) { ["consumer", "product", "warranty"] };
        case (#money) { ["money", "loan", "repayment"] };
        case (#employment) { ["employment", "job", "work"] };
        case (#neighborhood) { ["neighborhood", "neighbor", "noise"] };
        case (#family) { ["family", "inheritance", "custody"] };
      };

      if (matchKeywords(lowercaseDescription, keywords)) {
        bestMatch := (?category, 100);
      };
    };

    let (bestCategory, confidence) = bestMatch;
    {
      bestMatch = bestCategory;
      confidence;
      guidance = switch (bestCategory) {
        case (null) { null };
        case (?cat) {
          let dispute = getDisputeSpecificGuidanceForType(cat.categoryTypeEnum);
          ?{
            category = cat;
            fullDispute = dispute;
          };
        };
      };
    };
  };

  public query ({ caller }) func getAllCategories() : async [DisputeCategory] {
    allCategories;
  };

  // --------------------------------------
  // Recent Developments Section
  // --------------------------------------

  public type RecentDevelopment = {
    id : Nat;
    title : Text;
    date : Int;
    description : Text;
    url : Text;
  };

  public type RecentDevelopmentInput = {
    title : Text;
    date : Int;
    description : Text;
    url : Text;
  };

  let recentDevelopments = Map.empty<Nat, RecentDevelopment>();
  var nextDevelopmentId = 1;

  public query ({ caller }) func getAllDevelopments() : async [RecentDevelopment] {
    recentDevelopments.values().toArray();
  };

  // Guarded function - only admin can add development
  public shared ({ caller }) func addDevelopment(input : RecentDevelopmentInput) : async RecentDevelopment {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add developments");
    };

    let development : RecentDevelopment = {
      id = nextDevelopmentId;
      title = input.title;
      date = input.date;
      description = input.description;
      url = input.url;
    };

    recentDevelopments.add(nextDevelopmentId, development);
    nextDevelopmentId += 1;
    development;
  };

  public shared ({ caller }) func editDevelopment(id : Nat, input : RecentDevelopmentInput) : async RecentDevelopment {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can edit developments");
    };

    switch (recentDevelopments.get(id)) {
      case (null) { Runtime.trap("Development not found") };
      case (?_) {
        let updated : RecentDevelopment = {
          id;
          title = input.title;
          date = input.date;
          description = input.description;
          url = input.url;
        };
        recentDevelopments.add(id, updated);
        updated;
      };
    };
  };
};
