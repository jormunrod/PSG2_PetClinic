<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="petclinic" tagdir="/WEB-INF/tags" %>
<petclinic:layout pageName="owners">
    <h2>Owners</h2>
    <table id="ownersTable" class="table table-striped">
        <caption>List of Owners</caption>
        <thead>
            <tr>
                <th id="nameColumn" style="width: 150px;">Name</th>
                <th id="addressColumn" style="width: 200px;">Address</th>
                <th id="cityColumn">City</th>
                <th id="telephoneColumn" style="width: 120px;">Telephone</th>
                <th id="petsColumn">Pets</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${selections}" var="owner">
                <tr>
                    <td>
                        <spring:url value="/owners/{ownerId}" var="ownerUrl">
                            <spring:param name="ownerId" value="${owner.id}"/>
                        </spring:url>
                        <a href="${fn:escapeXml(ownerUrl)}"><c:out value="${owner.firstName} ${owner.lastName}"/></a>
                    </td>
                    <td>
                        <c:out value="${owner.address}"/>
                    </td>
                    <td>
                        <c:out value="${owner.city}"/>
                    </td>
                    <td>
                        <c:out value="${owner.telephone}"/>
                    </td>
                    <td>
                        <c:forEach var="pet" items="${owner.pets}">
                            <c:out value="${pet.name} "/>
                        </c:forEach>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</petclinic:layout>
